import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateManyDocument_typeInputEnvelope } from "../inputs/Document_base_configCreateManyDocument_typeInputEnvelope";
import { Document_base_configCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_base_configCreateOrConnectWithoutDocument_typeInput";
import { Document_base_configCreateWithoutDocument_typeInput } from "../inputs/Document_base_configCreateWithoutDocument_typeInput";
import { Document_base_configScalarWhereInput } from "../inputs/Document_base_configScalarWhereInput";
import { Document_base_configUpdateManyWithWhereWithoutDocument_typeInput } from "../inputs/Document_base_configUpdateManyWithWhereWithoutDocument_typeInput";
import { Document_base_configUpdateWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_base_configUpdateWithWhereUniqueWithoutDocument_typeInput";
import { Document_base_configUpsertWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_base_configUpsertWithWhereUniqueWithoutDocument_typeInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configUpdateManyWithoutDocument_typeNestedInput", {})
export class Document_base_configUpdateManyWithoutDocument_typeNestedInput {
  @TypeGraphQL.Field(_type => [Document_base_configCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_base_configCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_configCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configUpsertWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  upsert?: Document_base_configUpsertWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_configCreateManyDocument_typeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Document_base_configUpdateWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  update?: Document_base_configUpdateWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configUpdateManyWithWhereWithoutDocument_typeInput], {
    nullable: true
  })
  updateMany?: Document_base_configUpdateManyWithWhereWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_base_configScalarWhereInput[] | undefined;
}
