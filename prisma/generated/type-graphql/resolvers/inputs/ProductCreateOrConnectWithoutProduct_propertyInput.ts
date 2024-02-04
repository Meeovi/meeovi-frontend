import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_propertyInput } from "../inputs/ProductCreateWithoutProduct_propertyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_propertyInput", {})
export class ProductCreateOrConnectWithoutProduct_propertyInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_propertyInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_propertyInput;
}
