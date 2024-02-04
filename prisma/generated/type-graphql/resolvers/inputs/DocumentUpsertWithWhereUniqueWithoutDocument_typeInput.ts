import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutDocument_typeInput } from "../inputs/DocumentCreateWithoutDocument_typeInput";
import { DocumentUpdateWithoutDocument_typeInput } from "../inputs/DocumentUpdateWithoutDocument_typeInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutDocument_typeInput", {})
export class DocumentUpsertWithWhereUniqueWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutDocument_typeInput, {
    nullable: false
  })
  update!: DocumentUpdateWithoutDocument_typeInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutDocument_typeInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutDocument_typeInput;
}
