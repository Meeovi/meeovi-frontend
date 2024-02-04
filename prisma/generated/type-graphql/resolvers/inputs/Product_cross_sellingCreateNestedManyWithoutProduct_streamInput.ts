import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProduct_streamInputEnvelope } from "../inputs/Product_cross_sellingCreateManyProduct_streamInputEnvelope";
import { Product_cross_sellingCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProduct_streamInput";
import { Product_cross_sellingCreateWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateWithoutProduct_streamInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateNestedManyWithoutProduct_streamInput", {})
export class Product_cross_sellingCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_sellingCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_sellingWhereUniqueInput[] | undefined;
}
