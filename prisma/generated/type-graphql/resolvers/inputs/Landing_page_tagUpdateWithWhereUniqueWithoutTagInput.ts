import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagUpdateWithoutTagInput } from "../inputs/Landing_page_tagUpdateWithoutTagInput";
import { Landing_page_tagWhereUniqueInput } from "../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Landing_page_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Landing_page_tagUpdateWithoutTagInput;
}
