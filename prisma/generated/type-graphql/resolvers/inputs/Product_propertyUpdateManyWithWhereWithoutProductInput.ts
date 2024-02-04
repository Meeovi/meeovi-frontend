import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyScalarWhereInput } from "../inputs/Product_propertyScalarWhereInput";
import { Product_propertyUpdateManyMutationInput } from "../inputs/Product_propertyUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_propertyUpdateManyWithWhereWithoutProductInput", {})
export class Product_propertyUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_propertyScalarWhereInput, {
    nullable: false
  })
  where!: Product_propertyScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_propertyUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_propertyUpdateManyMutationInput;
}
