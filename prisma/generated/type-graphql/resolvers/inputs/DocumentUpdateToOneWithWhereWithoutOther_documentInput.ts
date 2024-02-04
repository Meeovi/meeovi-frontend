import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentUpdateWithoutOther_documentInput } from "../inputs/DocumentUpdateWithoutOther_documentInput";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";

@TypeGraphQL.InputType("DocumentUpdateToOneWithWhereWithoutOther_documentInput", {})
export class DocumentUpdateToOneWithWhereWithoutOther_documentInput {
  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutOther_documentInput, {
    nullable: false
  })
  data!: DocumentUpdateWithoutOther_documentInput;
}
