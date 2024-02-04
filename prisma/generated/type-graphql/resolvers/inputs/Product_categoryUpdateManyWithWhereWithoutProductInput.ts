import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryScalarWhereInput } from "../inputs/Product_categoryScalarWhereInput";
import { Product_categoryUpdateManyMutationInput } from "../inputs/Product_categoryUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_categoryUpdateManyWithWhereWithoutProductInput", {})
export class Product_categoryUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_categoryScalarWhereInput, {
    nullable: false
  })
  where!: Product_categoryScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_categoryUpdateManyMutationInput;
}
