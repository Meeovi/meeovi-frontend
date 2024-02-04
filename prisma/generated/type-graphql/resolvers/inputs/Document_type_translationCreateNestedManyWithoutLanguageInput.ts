import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Document_type_translationCreateManyLanguageInputEnvelope";
import { Document_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Document_type_translationCreateOrConnectWithoutLanguageInput";
import { Document_type_translationCreateWithoutLanguageInput } from "../inputs/Document_type_translationCreateWithoutLanguageInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationCreateNestedManyWithoutLanguageInput", {})
export class Document_type_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Document_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Document_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Document_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_type_translationWhereUniqueInput[] | undefined;
}
