import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_manufacturerInputEnvelope } from "../inputs/ProductCreateManyProduct_manufacturerInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/ProductCreateOrConnectWithoutProduct_manufacturerInput";
import { ProductCreateWithoutProduct_manufacturerInput } from "../inputs/ProductCreateWithoutProduct_manufacturerInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProduct_manufacturerInput } from "../inputs/ProductUpdateManyWithWhereWithoutProduct_manufacturerInput";
import { ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput";
import { ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutProduct_manufacturerNestedInput", {})
export class ProductUpdateManyWithoutProduct_manufacturerNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_manufacturerInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_manufacturerInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_manufacturerInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_manufacturerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutProduct_manufacturerInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
