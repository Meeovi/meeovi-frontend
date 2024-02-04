import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_optionInput } from "../inputs/ProductCreateOrConnectWithoutProduct_optionInput";
import { ProductCreateWithoutProduct_optionInput } from "../inputs/ProductCreateWithoutProduct_optionInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_optionInput", {})
export class ProductCreateNestedOneWithoutProduct_optionInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_optionInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_optionInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_optionInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_optionInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
