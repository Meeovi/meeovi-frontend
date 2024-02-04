import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyMediaInputEnvelope } from "../inputs/Product_downloadCreateManyMediaInputEnvelope";
import { Product_downloadCreateOrConnectWithoutMediaInput } from "../inputs/Product_downloadCreateOrConnectWithoutMediaInput";
import { Product_downloadCreateWithoutMediaInput } from "../inputs/Product_downloadCreateWithoutMediaInput";
import { Product_downloadScalarWhereInput } from "../inputs/Product_downloadScalarWhereInput";
import { Product_downloadUpdateManyWithWhereWithoutMediaInput } from "../inputs/Product_downloadUpdateManyWithWhereWithoutMediaInput";
import { Product_downloadUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Product_downloadUpdateWithWhereUniqueWithoutMediaInput";
import { Product_downloadUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Product_downloadUpsertWithWhereUniqueWithoutMediaInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadUpdateManyWithoutMediaNestedInput", {})
export class Product_downloadUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Product_downloadCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_downloadCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_downloadCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Product_downloadUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_downloadCreateManyMediaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_downloadUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Product_downloadUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Product_downloadUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_downloadScalarWhereInput[] | undefined;
}
