import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationScalarWhereInput } from "../inputs/Media_translationScalarWhereInput";
import { Media_translationUpdateManyMutationInput } from "../inputs/Media_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Media_translationUpdateManyWithWhereWithoutMediaInput", {})
export class Media_translationUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_translationScalarWhereInput, {
    nullable: false
  })
  where!: Media_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Media_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_translationUpdateManyMutationInput;
}
