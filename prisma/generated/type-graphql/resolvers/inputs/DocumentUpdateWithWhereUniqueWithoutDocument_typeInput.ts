import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentUpdateWithoutDocument_typeInput } from "../inputs/DocumentUpdateWithoutDocument_typeInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutDocument_typeInput", {})
export class DocumentUpdateWithWhereUniqueWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutDocument_typeInput, {
    nullable: false
  })
  data!: DocumentUpdateWithoutDocument_typeInput;
}
