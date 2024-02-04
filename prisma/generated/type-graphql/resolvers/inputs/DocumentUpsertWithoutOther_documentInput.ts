import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutOther_documentInput } from "../inputs/DocumentCreateWithoutOther_documentInput";
import { DocumentUpdateWithoutOther_documentInput } from "../inputs/DocumentUpdateWithoutOther_documentInput";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";

@TypeGraphQL.InputType("DocumentUpsertWithoutOther_documentInput", {})
export class DocumentUpsertWithoutOther_documentInput {
  @TypeGraphQL.Field(_type => DocumentUpdateWithoutOther_documentInput, {
    nullable: false
  })
  update!: DocumentUpdateWithoutOther_documentInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutOther_documentInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutOther_documentInput;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;
}
