import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_filterCreateManyProduct_streamInputEnvelope";
import { Product_stream_filterCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_filterCreateWithoutProduct_streamInput } from "../inputs/Product_stream_filterCreateWithoutProduct_streamInput";
import { Product_stream_filterScalarWhereInput } from "../inputs/Product_stream_filterScalarWhereInput";
import { Product_stream_filterUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/Product_stream_filterUpdateManyWithWhereWithoutProduct_streamInput";
import { Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_filterUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_filterUpsertWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_filterWhereUniqueInput } from "../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateManyWithoutProduct_streamNestedInput", {})
export class Product_stream_filterUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [Product_stream_filterCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_filterCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_filterCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: Product_stream_filterUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_filterCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  set?: Product_stream_filterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_stream_filterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_stream_filterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_filterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: Product_stream_filterUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: Product_stream_filterUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_stream_filterScalarWhereInput[] | undefined;
}
