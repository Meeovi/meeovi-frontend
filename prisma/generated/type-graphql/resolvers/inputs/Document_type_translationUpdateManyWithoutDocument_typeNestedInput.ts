import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyDocument_typeInputEnvelope } from "../inputs/Document_type_translationCreateManyDocument_typeInputEnvelope";
import { Document_type_translationCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateOrConnectWithoutDocument_typeInput";
import { Document_type_translationCreateWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateWithoutDocument_typeInput";
import { Document_type_translationScalarWhereInput } from "../inputs/Document_type_translationScalarWhereInput";
import { Document_type_translationUpdateManyWithWhereWithoutDocument_typeInput } from "../inputs/Document_type_translationUpdateManyWithWhereWithoutDocument_typeInput";
import { Document_type_translationUpdateWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_type_translationUpdateWithWhereUniqueWithoutDocument_typeInput";
import { Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput } from "../inputs/Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationUpdateManyWithoutDocument_typeNestedInput", {})
export class Document_type_translationUpdateManyWithoutDocument_typeNestedInput {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_type_translationCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_type_translationCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  upsert?: Document_type_translationUpsertWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_type_translationCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpdateWithWhereUniqueWithoutDocument_typeInput], {
    nullable: true
  })
  update?: Document_type_translationUpdateWithWhereUniqueWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpdateManyWithWhereWithoutDocument_typeInput], {
    nullable: true
  })
  updateMany?: Document_type_translationUpdateManyWithWhereWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_type_translationScalarWhereInput[] | undefined;
}
