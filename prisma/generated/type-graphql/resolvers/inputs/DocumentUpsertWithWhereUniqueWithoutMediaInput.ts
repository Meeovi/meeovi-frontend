import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutMediaInput } from "../inputs/DocumentCreateWithoutMediaInput";
import { DocumentUpdateWithoutMediaInput } from "../inputs/DocumentUpdateWithoutMediaInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutMediaInput", {})
export class DocumentUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: DocumentUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutMediaInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutMediaInput;
}
