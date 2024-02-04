import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyMediaInputEnvelope } from "../inputs/Cms_blockCreateManyMediaInputEnvelope";
import { Cms_blockCreateOrConnectWithoutMediaInput } from "../inputs/Cms_blockCreateOrConnectWithoutMediaInput";
import { Cms_blockCreateWithoutMediaInput } from "../inputs/Cms_blockCreateWithoutMediaInput";
import { Cms_blockScalarWhereInput } from "../inputs/Cms_blockScalarWhereInput";
import { Cms_blockUpdateManyWithWhereWithoutMediaInput } from "../inputs/Cms_blockUpdateManyWithWhereWithoutMediaInput";
import { Cms_blockUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_blockUpdateWithWhereUniqueWithoutMediaInput";
import { Cms_blockUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_blockUpsertWithWhereUniqueWithoutMediaInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockUpdateManyWithoutMediaNestedInput", {})
export class Cms_blockUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Cms_blockCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_blockCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_blockCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Cms_blockUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_blockCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Cms_blockUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Cms_blockUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_blockScalarWhereInput[] | undefined;
}
