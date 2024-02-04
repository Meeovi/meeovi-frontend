import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateManyProduct_streamInputEnvelope } from "../inputs/Product_stream_mappingCreateManyProduct_streamInputEnvelope";
import { Product_stream_mappingCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateOrConnectWithoutProduct_streamInput";
import { Product_stream_mappingCreateWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateWithoutProduct_streamInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateNestedManyWithoutProduct_streamInput", {})
export class Product_stream_mappingCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_stream_mappingCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_mappingCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_mappingCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_mappingWhereUniqueInput[] | undefined;
}
