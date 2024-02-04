import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateWithoutProductInput } from "../inputs/Product_propertyCreateWithoutProductInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyCreateOrConnectWithoutProductInput", {})
export class Product_propertyCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_propertyCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_propertyCreateWithoutProductInput;
}
