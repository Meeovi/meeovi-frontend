import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManyProduct_streamInputEnvelope } from "../inputs/Product_exportCreateManyProduct_streamInputEnvelope";
import { Product_exportCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_exportCreateOrConnectWithoutProduct_streamInput";
import { Product_exportCreateWithoutProduct_streamInput } from "../inputs/Product_exportCreateWithoutProduct_streamInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportCreateNestedManyWithoutProduct_streamInput", {})
export class Product_exportCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [Product_exportCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_exportCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_exportCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_exportCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_exportWhereUniqueInput[] | undefined;
}
