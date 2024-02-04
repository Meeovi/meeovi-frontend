import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutOrderInput } from "../inputs/DocumentCreateWithoutOrderInput";
import { DocumentUpdateWithoutOrderInput } from "../inputs/DocumentUpdateWithoutOrderInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutOrderInput", {})
export class DocumentUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: DocumentUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutOrderInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutOrderInput;
}
