import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateManyProductInputEnvelope } from "../inputs/Product_stream_mappingCreateManyProductInputEnvelope";
import { Product_stream_mappingCreateOrConnectWithoutProductInput } from "../inputs/Product_stream_mappingCreateOrConnectWithoutProductInput";
import { Product_stream_mappingCreateWithoutProductInput } from "../inputs/Product_stream_mappingCreateWithoutProductInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateNestedManyWithoutProductInput", {})
export class Product_stream_mappingCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_stream_mappingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_stream_mappingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_stream_mappingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_stream_mappingWhereUniqueInput[] | undefined;
}
