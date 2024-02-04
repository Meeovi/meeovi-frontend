import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_translationCreateManyProduct_streamInputEnvelope";
import { Product_stream_translationCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_translationCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_translationCreateWithoutProduct_streamInput } from "../inputs/Product_stream_translationCreateWithoutProduct_streamInput";
import { Product_stream_translationWhereUniqueInput } from "../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationCreateNestedManyWithoutProduct_streamInput", {})
export class Product_stream_translationCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [Product_stream_translationCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_translationCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_translationCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_translationCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_translationWhereUniqueInput[] | undefined;
}
