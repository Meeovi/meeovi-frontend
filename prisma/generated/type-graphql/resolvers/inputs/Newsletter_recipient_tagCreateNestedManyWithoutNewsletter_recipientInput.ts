import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope } from "../inputs/Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope";
import { Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput } from "../inputs/Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput";
import { Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput } from "../inputs/Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput", {})
export class Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput], {
    nullable: true
  })
  create?: Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipient_tagWhereUniqueInput[] | undefined;
}
