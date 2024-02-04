import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutShipping_methodInput } from "../inputs/MediaUpdateWithoutShipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutShipping_methodInput", {})
export class MediaUpdateToOneWithWhereWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutShipping_methodInput;
}
