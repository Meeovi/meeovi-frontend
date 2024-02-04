import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUnitInputEnvelope } from "../inputs/ProductCreateManyUnitInputEnvelope";
import { ProductCreateOrConnectWithoutUnitInput } from "../inputs/ProductCreateOrConnectWithoutUnitInput";
import { ProductCreateWithoutUnitInput } from "../inputs/ProductCreateWithoutUnitInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutUnitInput } from "../inputs/ProductUpdateManyWithWhereWithoutUnitInput";
import { ProductUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutUnitInput";
import { ProductUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutUnitInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutUnitNestedInput", {})
export class ProductUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUnitInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyUnitInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyUnitInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
