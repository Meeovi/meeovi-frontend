import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_reviewInput } from "../inputs/ProductCreateOrConnectWithoutProduct_reviewInput";
import { ProductCreateWithoutProduct_reviewInput } from "../inputs/ProductCreateWithoutProduct_reviewInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_reviewInput", {})
export class ProductCreateNestedOneWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
