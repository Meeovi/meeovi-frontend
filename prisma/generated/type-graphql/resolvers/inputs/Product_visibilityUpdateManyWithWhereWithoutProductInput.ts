import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityScalarWhereInput } from "../inputs/Product_visibilityScalarWhereInput";
import { Product_visibilityUpdateManyMutationInput } from "../inputs/Product_visibilityUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_visibilityUpdateManyWithWhereWithoutProductInput", {})
export class Product_visibilityUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_visibilityScalarWhereInput, {
    nullable: false
  })
  where!: Product_visibilityScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_visibilityUpdateManyMutationInput;
}
