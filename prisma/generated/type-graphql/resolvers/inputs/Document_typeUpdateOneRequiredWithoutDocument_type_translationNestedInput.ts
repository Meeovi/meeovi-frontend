import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateOrConnectWithoutDocument_type_translationInput } from "../inputs/Document_typeCreateOrConnectWithoutDocument_type_translationInput";
import { Document_typeCreateWithoutDocument_type_translationInput } from "../inputs/Document_typeCreateWithoutDocument_type_translationInput";
import { Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput } from "../inputs/Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput";
import { Document_typeUpsertWithoutDocument_type_translationInput } from "../inputs/Document_typeUpsertWithoutDocument_type_translationInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeUpdateOneRequiredWithoutDocument_type_translationNestedInput", {})
export class Document_typeUpdateOneRequiredWithoutDocument_type_translationNestedInput {
  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocument_type_translationInput, {
    nullable: true
  })
  create?: Document_typeCreateWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCreateOrConnectWithoutDocument_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: Document_typeCreateOrConnectWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpsertWithoutDocument_type_translationInput, {
    nullable: true
  })
  upsert?: Document_typeUpsertWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Document_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput, {
    nullable: true
  })
  update?: Document_typeUpdateToOneWithWhereWithoutDocument_type_translationInput | undefined;
}
