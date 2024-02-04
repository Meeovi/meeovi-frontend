import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_translationCreateManyProduct_streamInputEnvelope";
import { Product_stream_translationCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_translationCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_translationCreateWithoutProduct_streamInput } from "../inputs/Product_stream_translationCreateWithoutProduct_streamInput";
import { Product_stream_translationScalarWhereInput } from "../inputs/Product_stream_translationScalarWhereInput";
import { Product_stream_translationUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/Product_stream_translationUpdateManyWithWhereWithoutProduct_streamInput";
import { Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateManyWithoutProduct_streamNestedInput", {})
export class Product_stream_translationUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [Product_stream_translationCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_translationCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_translationCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: Product_stream_translationUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_translationCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: Product_stream_translationUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: Product_stream_translationUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_stream_translationScalarWhereInput[] | undefined;
}
