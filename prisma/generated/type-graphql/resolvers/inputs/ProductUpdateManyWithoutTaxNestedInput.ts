import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyTaxInputEnvelope } from "../inputs/ProductCreateManyTaxInputEnvelope";
import { ProductCreateOrConnectWithoutTaxInput } from "../inputs/ProductCreateOrConnectWithoutTaxInput";
import { ProductCreateWithoutTaxInput } from "../inputs/ProductCreateWithoutTaxInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutTaxInput } from "../inputs/ProductUpdateManyWithWhereWithoutTaxInput";
import { ProductUpdateWithWhereUniqueWithoutTaxInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutTaxInput";
import { ProductUpsertWithWhereUniqueWithoutTaxInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutTaxInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutTaxNestedInput", {})
export class ProductUpdateManyWithoutTaxNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutTaxInput], {
    nullable: true
  })
  create?: ProductCreateWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutTaxInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutTaxInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyTaxInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyTaxInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutTaxInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutTaxInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutTaxInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
