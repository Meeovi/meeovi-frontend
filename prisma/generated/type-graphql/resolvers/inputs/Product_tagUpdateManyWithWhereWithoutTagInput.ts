import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagScalarWhereInput } from "../inputs/Product_tagScalarWhereInput";
import { Product_tagUpdateManyMutationInput } from "../inputs/Product_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_tagUpdateManyWithWhereWithoutTagInput", {})
export class Product_tagUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => Product_tagScalarWhereInput, {
    nullable: false
  })
  where!: Product_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_tagUpdateManyMutationInput;
}
