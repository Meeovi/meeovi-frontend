import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateManyProductInputEnvelope } from "../inputs/Product_stream_mappingCreateManyProductInputEnvelope";
import { Product_stream_mappingCreateOrConnectWithoutProductInput } from "../inputs/Product_stream_mappingCreateOrConnectWithoutProductInput";
import { Product_stream_mappingCreateWithoutProductInput } from "../inputs/Product_stream_mappingCreateWithoutProductInput";
import { Product_stream_mappingScalarWhereInput } from "../inputs/Product_stream_mappingScalarWhereInput";
import { Product_stream_mappingUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_stream_mappingUpdateManyWithWhereWithoutProductInput";
import { Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput";
import { Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateManyWithoutProductNestedInput", {})
export class Product_stream_mappingUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_stream_mappingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_mappingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_mappingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  set?: Product_stream_mappingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_stream_mappingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_stream_mappingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_mappingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_stream_mappingUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_stream_mappingScalarWhereInput[] | undefined;
}
