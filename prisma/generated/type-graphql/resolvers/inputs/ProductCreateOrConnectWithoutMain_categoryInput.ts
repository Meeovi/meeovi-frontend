import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutMain_categoryInput } from "../inputs/ProductCreateWithoutMain_categoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutMain_categoryInput", {})
export class ProductCreateOrConnectWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutMain_categoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutMain_categoryInput;
}
