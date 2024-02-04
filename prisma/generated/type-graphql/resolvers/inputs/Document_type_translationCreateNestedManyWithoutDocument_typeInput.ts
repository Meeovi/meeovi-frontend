import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyDocument_typeInputEnvelope } from "../inputs/Document_type_translationCreateManyDocument_typeInputEnvelope";
import { Document_type_translationCreateOrConnectWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateOrConnectWithoutDocument_typeInput";
import { Document_type_translationCreateWithoutDocument_typeInput } from "../inputs/Document_type_translationCreateWithoutDocument_typeInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationCreateNestedManyWithoutDocument_typeInput", {})
export class Document_type_translationCreateNestedManyWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateWithoutDocument_typeInput], {
    nullable: true
  })
  create?: Document_type_translationCreateWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationCreateOrConnectWithoutDocument_typeInput], {
    nullable: true
  })
  connectOrCreate?: Document_type_translationCreateOrConnectWithoutDocument_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateManyDocument_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Document_type_translationCreateManyDocument_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_type_translationWhereUniqueInput[] | undefined;
}
