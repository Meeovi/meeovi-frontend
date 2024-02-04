import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagScalarWhereInput } from "../inputs/Category_tagScalarWhereInput";
import { Category_tagUpdateManyMutationInput } from "../inputs/Category_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Category_tagUpdateManyWithWhereWithoutTagInput", {})
export class Category_tagUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => Category_tagScalarWhereInput, {
    nullable: false
  })
  where!: Category_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Category_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Category_tagUpdateManyMutationInput;
}
