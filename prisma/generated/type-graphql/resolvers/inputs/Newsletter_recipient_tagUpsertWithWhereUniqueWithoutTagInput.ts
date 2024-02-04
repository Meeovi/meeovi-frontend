import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateWithoutTagInput } from "../inputs/Newsletter_recipient_tagCreateWithoutTagInput";
import { Newsletter_recipient_tagUpdateWithoutTagInput } from "../inputs/Newsletter_recipient_tagUpdateWithoutTagInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput", {})
export class Newsletter_recipient_tagUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagUpdateWithoutTagInput, {
    nullable: false
  })
  update!: Newsletter_recipient_tagUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Newsletter_recipient_tagCreateWithoutTagInput;
}
