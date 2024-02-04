import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagScalarWhereInput } from "../inputs/Landing_page_tagScalarWhereInput";
import { Landing_page_tagUpdateManyMutationInput } from "../inputs/Landing_page_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateManyWithWhereWithoutTagInput", {})
export class Landing_page_tagUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => Landing_page_tagScalarWhereInput, {
    nullable: false
  })
  where!: Landing_page_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Landing_page_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_page_tagUpdateManyMutationInput;
}
