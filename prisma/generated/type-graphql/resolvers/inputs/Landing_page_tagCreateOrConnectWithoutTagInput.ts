import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCreateWithoutTagInput } from "../inputs/Landing_page_tagCreateWithoutTagInput";
import { Landing_page_tagWhereUniqueInput } from "../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagCreateOrConnectWithoutTagInput", {})
export class Landing_page_tagCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Landing_page_tagCreateWithoutTagInput;
}
