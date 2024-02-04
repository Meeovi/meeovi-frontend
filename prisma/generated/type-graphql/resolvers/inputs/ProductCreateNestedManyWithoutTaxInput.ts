import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyTaxInputEnvelope } from "../inputs/ProductCreateManyTaxInputEnvelope";
import { ProductCreateOrConnectWithoutTaxInput } from "../inputs/ProductCreateOrConnectWithoutTaxInput";
import { ProductCreateWithoutTaxInput } from "../inputs/ProductCreateWithoutTaxInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutTaxInput", {})
export class ProductCreateNestedManyWithoutTaxInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutTaxInput], {
    nullable: true
  })
  create?: ProductCreateWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutTaxInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyTaxInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyTaxInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
