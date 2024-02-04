import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_mappingCreateManyProduct_streamInputEnvelope";
import { Product_stream_mappingCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_mappingCreateWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateWithoutProduct_streamInput";
import { Product_stream_mappingScalarWhereInput } from "../inputs/Product_stream_mappingScalarWhereInput";
import { Product_stream_mappingUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/Product_stream_mappingUpdateManyWithWhereWithoutProduct_streamInput";
import { Product_stream_mappingUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_mappingUpdateWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_mappingUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_mappingUpsertWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput", {})
export class Product_stream_mappingUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_mappingCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_mappingCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: Product_stream_mappingUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_mappingCreateManyProduct_streamInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: Product_stream_mappingUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: Product_stream_mappingUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_stream_mappingScalarWhereInput[] | undefined;
}
