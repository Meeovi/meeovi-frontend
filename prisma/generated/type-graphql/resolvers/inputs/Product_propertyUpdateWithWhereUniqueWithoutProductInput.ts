import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyUpdateWithoutProductInput } from "../inputs/Product_propertyUpdateWithoutProductInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_propertyUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_propertyUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_propertyUpdateWithoutProductInput;
}
