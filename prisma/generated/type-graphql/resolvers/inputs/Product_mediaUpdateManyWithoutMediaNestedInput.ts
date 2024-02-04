import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyMediaInputEnvelope } from "../inputs/Product_mediaCreateManyMediaInputEnvelope";
import { Product_mediaCreateOrConnectWithoutMediaInput } from "../inputs/Product_mediaCreateOrConnectWithoutMediaInput";
import { Product_mediaCreateWithoutMediaInput } from "../inputs/Product_mediaCreateWithoutMediaInput";
import { Product_mediaScalarWhereInput } from "../inputs/Product_mediaScalarWhereInput";
import { Product_mediaUpdateManyWithWhereWithoutMediaInput } from "../inputs/Product_mediaUpdateManyWithWhereWithoutMediaInput";
import { Product_mediaUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Product_mediaUpdateWithWhereUniqueWithoutMediaInput";
import { Product_mediaUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Product_mediaUpsertWithWhereUniqueWithoutMediaInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaUpdateManyWithoutMediaNestedInput", {})
export class Product_mediaUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Product_mediaCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_mediaCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_mediaCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Product_mediaUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_mediaCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  set?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Product_mediaUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Product_mediaUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_mediaScalarWhereInput[] | undefined;
}
