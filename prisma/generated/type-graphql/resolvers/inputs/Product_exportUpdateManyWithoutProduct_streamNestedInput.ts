import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManyProduct_streamInputEnvelope } from "../inputs/Product_exportCreateManyProduct_streamInputEnvelope";
import { Product_exportCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_exportCreateOrConnectWithoutProduct_streamInput";
import { Product_exportCreateWithoutProduct_streamInput } from "../inputs/Product_exportCreateWithoutProduct_streamInput";
import { Product_exportScalarWhereInput } from "../inputs/Product_exportScalarWhereInput";
import { Product_exportUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/Product_exportUpdateManyWithWhereWithoutProduct_streamInput";
import { Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput";
import { Product_exportUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_exportUpsertWithWhereUniqueWithoutProduct_streamInput";
import { Product_exportWhereUniqueInput } from "../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.InputType("Product_exportUpdateManyWithoutProduct_streamNestedInput", {})
export class Product_exportUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [Product_exportCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_exportCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_exportCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: Product_exportUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_exportCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  set?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_exportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: Product_exportUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: Product_exportUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_exportScalarWhereInput[] | undefined;
}
