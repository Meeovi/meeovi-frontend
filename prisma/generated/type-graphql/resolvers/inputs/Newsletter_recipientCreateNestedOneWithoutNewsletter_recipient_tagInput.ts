import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput", {})
export class Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput, {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput, {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput | undefined;
}
