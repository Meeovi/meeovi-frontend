import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyProductInputEnvelope } from "../inputs/Product_downloadCreateManyProductInputEnvelope";
import { Product_downloadCreateOrConnectWithoutProductInput } from "../inputs/Product_downloadCreateOrConnectWithoutProductInput";
import { Product_downloadCreateWithoutProductInput } from "../inputs/Product_downloadCreateWithoutProductInput";
import { Product_downloadScalarWhereInput } from "../inputs/Product_downloadScalarWhereInput";
import { Product_downloadUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_downloadUpdateManyWithWhereWithoutProductInput";
import { Product_downloadUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_downloadUpdateWithWhereUniqueWithoutProductInput";
import { Product_downloadUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_downloadUpsertWithWhereUniqueWithoutProductInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadUpdateManyWithoutProductNestedInput", {})
export class Product_downloadUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_downloadCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_downloadCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_downloadCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_downloadUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_downloadCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  set?: Product_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_downloadUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_downloadUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_downloadScalarWhereInput[] | undefined;
}
