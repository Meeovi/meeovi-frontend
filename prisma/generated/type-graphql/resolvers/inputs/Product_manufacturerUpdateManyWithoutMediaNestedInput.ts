import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateManyMediaInputEnvelope } from "../inputs/Product_manufacturerCreateManyMediaInputEnvelope";
import { Product_manufacturerCreateOrConnectWithoutMediaInput } from "../inputs/Product_manufacturerCreateOrConnectWithoutMediaInput";
import { Product_manufacturerCreateWithoutMediaInput } from "../inputs/Product_manufacturerCreateWithoutMediaInput";
import { Product_manufacturerScalarWhereInput } from "../inputs/Product_manufacturerScalarWhereInput";
import { Product_manufacturerUpdateManyWithWhereWithoutMediaInput } from "../inputs/Product_manufacturerUpdateManyWithWhereWithoutMediaInput";
import { Product_manufacturerUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Product_manufacturerUpdateWithWhereUniqueWithoutMediaInput";
import { Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateManyWithoutMediaNestedInput", {})
export class Product_manufacturerUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Product_manufacturerCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_manufacturerCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturerCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturerCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereUniqueInput], {
    nullable: true
  })
  set?: Product_manufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_manufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_manufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Product_manufacturerUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Product_manufacturerUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_manufacturerScalarWhereInput[] | undefined;
}
