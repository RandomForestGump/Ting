import React from "react";
import Form from "@dgn-src-ui/core/Form";
import { Container, Typography, Grid } from "@material-ui/core";
import CTA from "@dgn-src-ui/core/CTA";
import Button from "@dgn-src-ui/core/Button";
import Heading from "@dgn-src-ui/core/Heading";
import Card from "@dgn-src-ui/core/Card/Card";
import CardArt from "@dgn-src-ui/core/CardArt/CardArt";
import useConfig from "@dgn-src-ui/hooks/useConfig";
import Radio from "@dgn-src-ui/core/Radio";
import RadioList from "@dgn-src-ui/core/RadioList";
import RadioListItem from "@dgn-src-ui/core/RadioListItem";
import Switch from "@dgn-src-ui/core/Switch";

export default ({ form }) => {
  const { consumer } = useConfig();

  return (
    <Container>
      <Form name="flowSelector" id="flowSelector" {...form}>
        <Heading>Flows</Heading>
        <Card title={`${consumer.firstName} ${consumer.lastName}`}>
          <CardArt src={consumer.cardArtUrl} />
          <Typography variant="body2">
            Discover Card
            <br />
            Ending in {consumer.lastFour}
            <br />
            {consumer.emailAddress}
          </Typography>
        </Card>

        <RadioList name="flowList" label="Flow List">
          <RadioListItem compact>
            <Typography paragraph>
              <Radio value="flow1">
                <strong>Flow 1:</strong> First-time checkout on issuer-enrolled
                card
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow2">
                <strong>Flow 2:</strong> First-time checkout on issuer-enrolled
                card (multiple cards in profile)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow3">
                <strong>Flow 3:</strong> First-time checkout on issuer-enrolled
                card (3 OTPs, worst case scenario)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow4A">
                <strong>Flow 4A:</strong> Checkout with one card in profile
                (least friction)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow4B">
                <strong>Flow 4B:</strong> Checkout with multiple cards present
                in profile
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow5A">
                <strong>Flow 5A:</strong> Checkout with one card in profile
                (ID&amp;V rule violated - provide rule IDs)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow5B">
                <strong>Flow 5B:</strong> Checkout with multiple cards present
                in profile (FedID accepted but ID&amp;V rule violated - provide
                rule IDs)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow5C">
                <strong>Flow 5C:</strong> Checkout with multiple cards present
                in profile (cookie presented but ID&amp;V rule violated -
                provide rule IDs)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow6">
                <strong>Flow 6 :</strong> Existing SRC user enrolls Discover PAN
                and Email is recognized by the issuer (no step-up, green flow)
              </Radio>
            </Typography>
            <Typography paragraph>
              <Radio value="flow9">
                <strong>Flow 9:</strong> Add a new card at merchant, Profile
                exists– Step-up is needed by DGN, Network step up challenge,
                Issuer step up challenge
              </Radio>
            </Typography>
            <Typography>
              <Radio value="flow10">
                <strong>Flow 10:</strong> New SRC user enrolls Discover PAN and
                Email is recognized by the issuer (green flow)
              </Radio>
            </Typography>
          </RadioListItem>
        </RadioList>
        <RadioListItem compact>
          <strong>Click-Through Experience:</strong>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <Switch name="flowMode" label="Flow Mode" />
            </Grid>
            <Grid item>Interactive Mode</Grid>
          </Grid>
          <Typography variant="body2">
            By default this flow prototype will use a "click-through"
            experience. Tapping at the very top of the screen will return you to
            the table of contents. Tapping anywhere else on the screen will
            advance the flow forward. By turning the <em>Interactive Mode</em>{" "}
            on, all DCF screens will become fully interactive and require manual
            input to proceed forward.
          </Typography>
        </RadioListItem>
        <CTA>
          <Button type="submit">Let it Flow</Button>
        </CTA>
      </Form>
    </Container>
  );
};
