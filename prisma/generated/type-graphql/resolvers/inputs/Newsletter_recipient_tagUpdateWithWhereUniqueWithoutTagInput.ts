import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagUpdateWithoutTagInput } from "../inputs/Newsletter_recipient_tagUpdateWithoutTagInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Newsletter_recipient_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Newsletter_recipient_tagUpdateWithoutTagInput;
}
