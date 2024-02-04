import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateManyMediaInputEnvelope } from "../inputs/Document_base_configCreateManyMediaInputEnvelope";
import { Document_base_configCreateOrConnectWithoutMediaInput } from "../inputs/Document_base_configCreateOrConnectWithoutMediaInput";
import { Document_base_configCreateWithoutMediaInput } from "../inputs/Document_base_configCreateWithoutMediaInput";
import { Document_base_configScalarWhereInput } from "../inputs/Document_base_configScalarWhereInput";
import { Document_base_configUpdateManyWithWhereWithoutMediaInput } from "../inputs/Document_base_configUpdateManyWithWhereWithoutMediaInput";
import { Document_base_configUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Document_base_configUpdateWithWhereUniqueWithoutMediaInput";
import { Document_base_configUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Document_base_configUpsertWithWhereUniqueWithoutMediaInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configUpdateManyWithoutMediaNestedInput", {})
export class Document_base_configUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Document_base_configCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Document_base_configCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_configCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Document_base_configUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_configCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  set?: Document_base_configWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Document_base_configWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  delete?: Document_base_configWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_configWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Document_base_configUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Document_base_configUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_base_configScalarWhereInput[] | undefined;
}
